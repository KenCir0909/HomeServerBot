const { Client, GuildMember } = require('discord.js');

/**
 * @param {Client} client
 * @param {GuildMember} member
 */

module.exports = async (client, member) => {
    if (member.user.bot || member.guild.id !== '706452606918066237') return;

    client.channels.cache.get('797008715646500865').send(`${member}さん、ホワイトリストの記入とアンケートの参加お願いします。\nhttps://forms.gle/bRJ76vVAGQCgu1rN6\nhttps://docs.google.com/forms/d/e/1FAIpQLScJNd7ka66_69_irUeDr6NPAf5t4z_oNOKFWs60UBctGWkePA/viewform?usp=sf_link\nもし抜ける場合はこちらを抜ける前に記入していただけると幸いです\nhttps://docs.google.com/forms/d/166hmvv-eYtmazsENRWvl9i5JrCiDe5TnxRnyEB5VhmA/edit`);
};