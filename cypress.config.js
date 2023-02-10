const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      on('task', { isFileExist })
    },
  },
});