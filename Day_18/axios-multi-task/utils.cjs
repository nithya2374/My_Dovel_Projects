function formatTitle(title) {
    return `📝 Title: ${title.toUpperCase()}`;
}

function formatUser(user) {
    return `👤 ${user.name} (${user.email})`;
}

module.exports = {
    formatTitle,
    formatUser
};
