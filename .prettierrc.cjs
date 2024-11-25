module.exports = {
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: ['docs/**/*.md', 'docs/src/page/**/*.{js,tsx}', 'docs/data/**/*.{js,tsx}'],
            options: {
                printWidth: 85,
            },
        },
        {
            files: ['docs/page/blog/**/*.md'],
            options: {
                printWidth: 82,
            },
        },
    ],
};