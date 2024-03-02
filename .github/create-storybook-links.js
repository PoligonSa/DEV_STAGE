module.exports = () => {
    const { PACKAGES_DS, BASE_URL } = process.env;

    const links = JSON.parse(PACKAGES_DS)
        .map((item) => {
            const name = item.replace('plasma-', '');

            return `${name} storybook: ${BASE_URL}/${name}-storybook/`;
        })
        .join('\n');

    const message = `Documentation preview deployed!

website: ${BASE_URL}/
${links}
`;

    return message;
};
