/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    let res = [];
    folder.sort()
    for (let i = 0; i < folder.length; i++) {
        if (i == 0 || !folder[i].startsWith(res[res.length - 1] + '/')) {
            res.push(folder[i]);
        }
    }
    return res;
};