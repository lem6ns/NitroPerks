/**
 * @name NitroPerks
 * @author lemons
 * @description Abandoned.
 * @version 3.0.0
 * @invite inviteCode
 * @authorId 407348579376693260
 * @source https://raw.githubusercontent.com/respecting/NitroPerks/main/NitroPerks.plugin.js
 * @updateUrl https://raw.githubusercontent.com/respecting/NitroPerks/main/NitroPerks.plugin.js
 */

 module.exports = class NitroPerks {
    load() {BdApi.showConfirmationModal("Notice:", 
    [
        "NitroPerks has been abandoned.",
        "Alternatives you can use are:",
        BdApi.React.createElement("a", {href: "https://betterdiscord.app/plugin/FreeEmojis", target: "_blank"}, "FreeEmojis by An00nymushun"),"",
BdApi.React.createElement("a", {href: "https://betterdiscord.app/plugin/EditUsers", target: "_blank"}, "EditUsers by DevilBro")
    ],
    {
        danger: true,
        confirmText: "Okay.",
        cancelText: ""
    }
);}

    start() {} 
    stop() {}
}