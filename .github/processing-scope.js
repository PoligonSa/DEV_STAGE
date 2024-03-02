// HAS_ASSETS - это флаг для управления логикой "@auto-it" плагина upload-assets-extend
// Изменения в plasma-tokens или plasma-tokens-utils так же повлияют на то что в packagesList окажется plasma-tokens-native

module.exports = () => {
    const { RAW_DATA, PACKAGES_CYPRESS, PACKAGES_DS } = process.env;

    /**
     * @param RAW_DATA Information about the changed state
     * @param RAW_DATA.name The name of the package.
     * @param RAW_DATA.version The version of the package.
     * @param RAW_DATA.private The type of the package.
     * @param RAW_DATA.location The path of the package.
     *
     * @example
     * {
     *   "name": "@salutejs/plasma-website",
     *   "version": "0.184.0",
     *   "private": true,
     *   "location": "/Users/workspace/plasma/website/plasma-website"
     *  }
     */
    const rawData = JSON.parse(RAW_DATA).map(({ name }) => name);

    const packagesCypress = JSON.parse(PACKAGES_CYPRESS);

    const packagesDS = JSON.parse(PACKAGES_DS);

    if (!rawData || !rawData.length) {
        return {
            RAW_DATA: [],
            PACKAGES_CYPRESS_RUN: [],
            PACKAGES_DOCUMENTATIONS_RUN: [],
            PROCESSED_DATA: [],
            HAS_PACKAGES_CYPRESS_RUN: false,
            HAS_PACKAGES_DS_CHANGES: false,
            HAS_ASSETS: false,
        };
    }

    /**
     * List short packages name for run cypress test
     * @example
     * ["web", "ui", "b2c"]
     */
    const PACKAGES_CYPRESS_RUN = rawData
        .filter((item) => packagesCypress.includes(item))
        .map((item) => item.replace('@salutejs/', '').replace('plasma-', ''));

    /**
     * List packages who has a documentations artifacts: storybook, docusaurus
     * @example
     * ["plasma-web", "caldera", "sdds-serv"]
     */

    const PACKAGES_DOCUMENTATIONS_RUN = rawData
        .filter((item) => packagesDS.includes(item))
        .map((item) => item.replace('@salutejs/', ''));

    /**
     * Processed data - packages name without "@salutejs/"
     * @example
     * ["plasma-web", "plasma-ui", "caldera"]
     */
    const processedData = rawData.map((item) => item.replace('@salutejs/', ''));

    return {
        RAW_DATA: JSON.stringify(rawData),
        PACKAGES_DOCUMENTATIONS_RUN: JSON.stringify(PACKAGES_DOCUMENTATIONS_RUN),
        PACKAGES_CYPRESS_RUN: JSON.stringify(PACKAGES_CYPRESS_RUN),
        PROCESSED_DATA: JSON.stringify(processedData),
        HAS_PACKAGES_CYPRESS_RUN: !!PACKAGES_CYPRESS_RUN.length,
        HAS_PACKAGES_DS_CHANGES: !!PACKAGES_DOCUMENTATIONS_RUN.length,
        HAS_ASSETS: rawData.includes('@salutejs/plasma-tokens-native'),
    };
};
