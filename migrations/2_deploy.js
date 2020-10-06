// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
    //masih perlu diubah linknya
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Kode Unik","UNIK", "https://my-json-server.typicode.com/cryptonusa/unik/tokens/");
};