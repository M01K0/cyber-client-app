
'use strict';

const fileConfig = getUserHome() + '/cyber-client-config.json';
var nconf = require('nconf').file({file: fileConfig });
const fs = require('fs');


function saveSettings(settingKey, settingValue) {
    nconf.set(settingKey, settingValue);
    nconf.save();
}

function readSettings(settingKey) {
    nconf.load();
    return nconf.get(settingKey);
}

function deleteSettings(settingKey) {
    nconf.load();
    return nconf.remove(settingKey);
}

function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function createInvoiceFolder() {
    fs.mkdirSync(invoiceFolderPath);
}

function existInvoiceFolder() {
    return fs.existsSync(invoiceFolderPath);
}

function existFileConfig() {
  return fs.existsSync(fileConfig);
}

function getFileConfig() {
  return fileConfig;
}

module.exports = {
    saveSettings: saveSettings,
    readSettings: readSettings,
    deleteSettings: deleteSettings,
    existInvoiceFolder: existInvoiceFolder,
    createInvoiceFolder: createInvoiceFolder,
    getUserHome: getUserHome,
    existFileConfig: existFileConfig,
    getFileConfig: getFileConfig
};