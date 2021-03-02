const path = require('path');

const { loadPackageDefinition } = require('@xazabevo/grpc-common');

function getPlatformDefinition(version) {
  const protoPath = path.join(__dirname, `../protos/platform/v${version}/platform.proto`);

  return loadPackageDefinition(protoPath, `org.xazab.platform.dapi.v${version}.Platform`);
}

module.exports = getPlatformDefinition;
