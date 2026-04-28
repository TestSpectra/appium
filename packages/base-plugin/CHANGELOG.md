# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.1](https://github.com/TestSpectra/appium/compare/@testspectra/base-plugin@4.0.0...@testspectra/base-plugin@4.0.1) (2026-04-28)

**Note:** Version bump only for package @testspectra/base-plugin





## 4.0.0 (2026-04-27)


### ⚠ BREAKING CHANGES

* set minimum Node.js version to v20.19.0 (#21394)
* Appium now supports version range `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* **appium,base-driver,base-plugin,test-support,types:** move test fixtures into test-support ([70d88cb](https://github.com/TestSpectra/appium/commit/70d88cb86f28354efe313cc6be6a0afef20b38b3))
* **appium,base-driver,base-plugin:** allow plugins to define custom bidi commands and emit bidi events ([#20876](https://github.com/TestSpectra/appium/issues/20876)) ([8df1c21](https://github.com/TestSpectra/appium/commit/8df1c217a15d30300c04b9f59cdbdffa70325828))
* **base-driver:** Migrate protocol.js to typescript ([#21241](https://github.com/TestSpectra/appium/issues/21241)) ([023cd43](https://github.com/TestSpectra/appium/commit/023cd43a58f85a66971cfc7aed2656aeeb014032))
* **base-plugin:** add ability for plugins to implement execute methods ([84abed9](https://github.com/TestSpectra/appium/commit/84abed920a1dc796ff09013ce86079de5a25fe50))
* **base-plugin:** Migrate to typescript ([#21918](https://github.com/TestSpectra/appium/issues/21918)) ([07b573d](https://github.com/TestSpectra/appium/commit/07b573df270273d26691f77ee80cd415402b1508))
* **base-plugin:** prepare for use by plugins ([5e96a6d](https://github.com/TestSpectra/appium/commit/5e96a6d2a7a79e96de03802b05406325765f15ab))
* experimental support for typedoc generation ([4746080](https://github.com/TestSpectra/appium/commit/4746080e54ed8bb494cbc7c6ce83db503bf6bb52))
* **typedoc-appium-plugin:** implement cross-referencing of methods ([8b33414](https://github.com/TestSpectra/appium/commit/8b334149018f7d49448da9e7982356c72bcd468e))
* use exact version for dependencies in monorepo packages instead of ^ ([#22090](https://github.com/TestSpectra/appium/issues/22090)) ([86c8f23](https://github.com/TestSpectra/appium/commit/86c8f23a670d0bbc2d359a8235828606bd36e6aa))


### Bug Fixes

* All the rest of linter warnings ([#22183](https://github.com/TestSpectra/appium/issues/22183)) ([efe167f](https://github.com/TestSpectra/appium/commit/efe167f59a0a19515b78a53346e5d0b3fc4c744c))
* **appium,base-driver,base-plugin,doctor,docutils,eslint-config-appium,execute-driver-plugin,fake-driver,fake-plugin,gulp-plugins,images-plugin,opencv,relaxed-caps-plugin,schema,support,test-support,types,universal-xml-plugin:** update engines ([d8d2382](https://github.com/TestSpectra/appium/commit/d8d2382327ba7b7db8a4d1cad987c0e60184c92d))
* **appium:** fix extension autoinstall postinstall script ([3e2c05d](https://github.com/TestSpectra/appium/commit/3e2c05d8a290072484afde34fe5fd968618f6359)), closes [#16924](https://github.com/TestSpectra/appium/issues/16924)
* **base-driver,base-plugin,types:** update PluginCommand and DriverCommand types ([0dcd5fa](https://github.com/TestSpectra/appium/commit/0dcd5fa371af523c6527e55de4cff6cd472fde22))
* **base-plugin:** correct version ([b438249](https://github.com/TestSpectra/appium/commit/b438249583ef7950dc5f23e51049c677de24b716))
* **base-plugin:** do not define a new method ([3cd7950](https://github.com/TestSpectra/appium/commit/3cd79509f88714cf371a591e4e0ac000b66d92b6))
* **base-plugin:** use correct 'address' prop instead of 'host' ([dc9fa62](https://github.com/TestSpectra/appium/commit/dc9fa6236db7dbaaeccdbe9e8dcb83bde179ed72))
* **docutils:** remove `@appium/typedoc-plugin-appium` and all other uses of `typedoc` ([#19465](https://github.com/TestSpectra/appium/issues/19465)) ([7528fcf](https://github.com/TestSpectra/appium/commit/7528fcf890f79f4017f5e718bb1952bf907ee479))
* Reduce linter warnings ([#20860](https://github.com/TestSpectra/appium/issues/20860)) ([65658cc](https://github.com/TestSpectra/appium/commit/65658ccbdde9144c45cb5aad6a9089a5d6f3a0a3))
* **types,base-plugin:** fix static prop types for plugins ([2289b45](https://github.com/TestSpectra/appium/commit/2289b4527208c595b2758b9b14d86a2ab91ac15f))


### Miscellaneous Chores

* set engines to minimum Node.js v14.17.0 ([a1dbe6c](https://github.com/TestSpectra/appium/commit/a1dbe6c43efe76604943a607d402f4c8b864d652))
* set minimum Node.js version to v20.19.0 ([#21394](https://github.com/TestSpectra/appium/issues/21394)) ([37e22c4](https://github.com/TestSpectra/appium/commit/37e22c4f9c9920cea3f340841ab1b7c60e3147e9))



## [3.2.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.2.0...@testspectra/base-plugin@3.2.1) (2026-04-23)


### Bug Fixes

* All the rest of linter warnings ([#22183](https://github.com/appium/appium/issues/22183)) ([efe167f](https://github.com/appium/appium/commit/efe167f59a0a19515b78a53346e5d0b3fc4c744c))



## [3.2.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.1.1...@testspectra/base-plugin@3.2.0) (2026-04-09)


### Features

* use exact version for dependencies in monorepo packages instead of ^ ([#22090](https://github.com/appium/appium/issues/22090)) ([86c8f23](https://github.com/appium/appium/commit/86c8f23a670d0bbc2d359a8235828606bd36e6aa))



## [3.1.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.1.0...@testspectra/base-plugin@3.1.1) (2026-03-09)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.1.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.6...@testspectra/base-plugin@3.1.0) (2026-03-08)


### Features

* **base-plugin:** Migrate to typescript ([#21918](https://github.com/appium/appium/issues/21918)) ([07b573d](https://github.com/appium/appium/commit/07b573df270273d26691f77ee80cd415402b1508))



## [3.0.6](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.5...@testspectra/base-plugin@3.0.6) (2026-01-26)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.5](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.4...@testspectra/base-plugin@3.0.5) (2025-12-04)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.4](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.3...@testspectra/base-plugin@3.0.4) (2025-11-12)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.3](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.2...@testspectra/base-plugin@3.0.3) (2025-10-08)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.1...@testspectra/base-plugin@3.0.2) (2025-09-09)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.0...@testspectra/base-plugin@3.0.1) (2025-08-20)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@3.0.0-rc.2...@testspectra/base-plugin@3.0.0) (2025-08-18)

**Note:** Version bump only for package @testspectra/base-plugin





## [3.0.0-rc.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.3...@testspectra/base-plugin@3.0.0-rc.2) (2025-08-14)


### ⚠ BREAKING CHANGES

* set minimum Node.js version to v20.19.0 (#21394)

### Features

* **base-driver:** Migrate protocol.js to typescript ([#21241](https://github.com/appium/appium/issues/21241)) ([023cd43](https://github.com/appium/appium/commit/023cd43a58f85a66971cfc7aed2656aeeb014032))


### Miscellaneous Chores

* set minimum Node.js version to v20.19.0 ([#21394](https://github.com/appium/appium/issues/21394)) ([37e22c4](https://github.com/appium/appium/commit/37e22c4f9c9920cea3f340841ab1b7c60e3147e9))



## [2.3.7](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.6...@testspectra/base-plugin@2.3.7) (2025-06-01)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.6](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.5...@testspectra/base-plugin@2.3.6) (2025-04-25)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.5](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.4...@testspectra/base-plugin@2.3.5) (2025-03-17)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.4](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.3...@testspectra/base-plugin@2.3.4) (2025-03-11)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.3](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.2...@testspectra/base-plugin@2.3.3) (2025-02-20)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.1...@testspectra/base-plugin@2.3.2) (2025-02-20)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.3.0...@testspectra/base-plugin@2.3.1) (2025-02-19)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.3.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.52...@testspectra/base-plugin@2.3.0) (2025-01-08)


### Features

* **appium,base-driver,base-plugin:** allow plugins to define custom bidi commands and emit bidi events ([#20876](https://github.com/appium/appium/issues/20876)) ([8df1c21](https://github.com/appium/appium/commit/8df1c217a15d30300c04b9f59cdbdffa70325828))



## [2.2.52](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.51...@testspectra/base-plugin@2.2.52) (2025-01-06)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.51](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.50...@testspectra/base-plugin@2.2.51) (2025-01-02)


### Bug Fixes

* Reduce linter warnings ([#20860](https://github.com/appium/appium/issues/20860)) ([65658cc](https://github.com/appium/appium/commit/65658ccbdde9144c45cb5aad6a9089a5d6f3a0a3))



## [2.2.50](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.49...@testspectra/base-plugin@2.2.50) (2024-12-05)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.49](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.48...@testspectra/base-plugin@2.2.49) (2024-12-02)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.48](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.47...@testspectra/base-plugin@2.2.48) (2024-11-29)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.47](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.46...@testspectra/base-plugin@2.2.47) (2024-10-24)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.46](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.45...@testspectra/base-plugin@2.2.46) (2024-10-15)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.45](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.44...@testspectra/base-plugin@2.2.45) (2024-09-26)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.44](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.43...@testspectra/base-plugin@2.2.44) (2024-09-16)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.43](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.42...@testspectra/base-plugin@2.2.43) (2024-08-07)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.42](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.41...@testspectra/base-plugin@2.2.42) (2024-07-10)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.41](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.40...@testspectra/base-plugin@2.2.41) (2024-06-28)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.40](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.39...@testspectra/base-plugin@2.2.40) (2024-06-27)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.39](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.38...@testspectra/base-plugin@2.2.39) (2024-06-11)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.38](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.37...@testspectra/base-plugin@2.2.38) (2024-06-11)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.37](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.36...@testspectra/base-plugin@2.2.37) (2024-06-11)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.36](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.35...@testspectra/base-plugin@2.2.36) (2024-06-10)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.35](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.34...@testspectra/base-plugin@2.2.35) (2024-06-06)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.34](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.33...@testspectra/base-plugin@2.2.34) (2024-06-06)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.33](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.32...@testspectra/base-plugin@2.2.33) (2024-06-06)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.32](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.31...@testspectra/base-plugin@2.2.32) (2024-05-27)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.31](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.30...@testspectra/base-plugin@2.2.31) (2024-04-21)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.30](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.29...@testspectra/base-plugin@2.2.30) (2024-04-16)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.29](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.28...@testspectra/base-plugin@2.2.29) (2024-04-08)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.28](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.27...@testspectra/base-plugin@2.2.28) (2024-02-13)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.27](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.26...@testspectra/base-plugin@2.2.27) (2024-02-06)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.26](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.25...@testspectra/base-plugin@2.2.26) (2024-01-03)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.25](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.24...@testspectra/base-plugin@2.2.25) (2023-12-18)


### Bug Fixes

* **docutils:** remove `@testspectra/typedoc-plugin-appium` and all other uses of `typedoc` ([#19465](https://github.com/appium/appium/issues/19465)) ([7528fcf](https://github.com/appium/appium/commit/7528fcf890f79f4017f5e718bb1952bf907ee479))



## [2.2.24](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.23...@testspectra/base-plugin@2.2.24) (2023-12-04)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.23](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.22...@testspectra/base-plugin@2.2.23) (2023-11-14)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.22](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.21...@testspectra/base-plugin@2.2.22) (2023-10-19)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.21](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.20...@testspectra/base-plugin@2.2.21) (2023-10-18)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.20](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.19...@testspectra/base-plugin@2.2.20) (2023-08-23)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.19](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.18...@testspectra/base-plugin@2.2.19) (2023-08-22)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.18](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.17...@testspectra/base-plugin@2.2.18) (2023-08-21)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.17](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.16...@testspectra/base-plugin@2.2.17) (2023-08-17)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.16](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.15...@testspectra/base-plugin@2.2.16) (2023-07-24)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.15](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.14...@testspectra/base-plugin@2.2.15) (2023-07-03)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.14](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.13...@testspectra/base-plugin@2.2.14) (2023-06-29)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.13](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.12...@testspectra/base-plugin@2.2.13) (2023-06-15)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.12](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.11...@testspectra/base-plugin@2.2.12) (2023-06-14)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.11](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.10...@testspectra/base-plugin@2.2.11) (2023-06-14)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.10](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.9...@testspectra/base-plugin@2.2.10) (2023-05-19)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.9](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.8...@testspectra/base-plugin@2.2.9) (2023-05-19)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.8](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.7...@testspectra/base-plugin@2.2.8) (2023-05-17)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.7](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.6...@testspectra/base-plugin@2.2.7) (2023-04-14)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.6](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.5...@testspectra/base-plugin@2.2.6) (2023-04-10)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.5](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.4...@testspectra/base-plugin@2.2.5) (2023-04-03)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.4](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.3...@testspectra/base-plugin@2.2.4) (2023-03-28)


### Bug Fixes

* **base-driver,base-plugin,types:** update PluginCommand and DriverCommand types ([0dcd5fa](https://github.com/appium/appium/commit/0dcd5fa371af523c6527e55de4cff6cd472fde22))





## [2.2.3](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.2...@testspectra/base-plugin@2.2.3) (2023-03-08)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.1...@testspectra/base-plugin@2.2.2) (2023-02-24)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.2.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.2.0...@testspectra/base-plugin@2.2.1) (2023-02-09)

**Note:** Version bump only for package @testspectra/base-plugin





# [2.2.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.1.3...@testspectra/base-plugin@2.2.0) (2023-01-23)


### Features

* **base-plugin:** add ability for plugins to implement execute methods ([84abed9](https://github.com/appium/appium/commit/84abed920a1dc796ff09013ce86079de5a25fe50))





## [2.1.3](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.1.2...@testspectra/base-plugin@2.1.3) (2023-01-13)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.1.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.1.1...@testspectra/base-plugin@2.1.2) (2023-01-13)

**Note:** Version bump only for package @testspectra/base-plugin





## [2.1.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.1.0...@testspectra/base-plugin@2.1.1) (2023-01-13)

**Note:** Version bump only for package @testspectra/base-plugin





# [2.1.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.0.1...@testspectra/base-plugin@2.1.0) (2023-01-13)


### Features

* **typedoc-appium-plugin:** implement cross-referencing of methods ([8b33414](https://github.com/appium/appium/commit/8b334149018f7d49448da9e7982356c72bcd468e))





## [2.0.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@2.0.0...@testspectra/base-plugin@2.0.1) (2022-12-21)

**Note:** Version bump only for package @testspectra/base-plugin

# [2.0.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.10.5...@testspectra/base-plugin@2.0.0) (2022-12-14)

### Bug Fixes

- **base-plugin:** do not define a new method ([3cd7950](https://github.com/appium/appium/commit/3cd79509f88714cf371a591e4e0ac000b66d92b6))

- chore!: set engines to minimum Node.js v14.17.0 ([a1dbe6c](https://github.com/appium/appium/commit/a1dbe6c43efe76604943a607d402f4c8b864d652))

### Features

- experimental support for typedoc generation ([4746080](https://github.com/appium/appium/commit/4746080e54ed8bb494cbc7c6ce83db503bf6bb52))

### BREAKING CHANGES

- Appium now supports version range `^14.17.0 || ^16.13.0 || >=18.0.0`

## [1.10.5](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.10.4...@testspectra/base-plugin@1.10.5) (2022-10-14)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.10.4](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.10.3...@testspectra/base-plugin@1.10.4) (2022-10-13)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.10.3](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.10.2...@testspectra/base-plugin@1.10.3) (2022-09-07)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.10.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.10.1...@testspectra/base-plugin@1.10.2) (2022-08-10)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.10.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.10.0...@testspectra/base-plugin@1.10.1) (2022-08-03)

### Bug Fixes

- **appium,base-driver,base-plugin,doctor,docutils,eslint-config-appium,execute-driver-plugin,fake-driver,fake-plugin,gulp-plugins,images-plugin,opencv,relaxed-caps-plugin,schema,support,test-support,types,universal-xml-plugin:** update engines ([d8d2382](https://github.com/appium/appium/commit/d8d2382327ba7b7db8a4d1cad987c0e60184c92d))

# [1.10.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.9.2...@testspectra/base-plugin@1.10.0) (2022-07-28)

### Features

- **appium,base-driver,base-plugin,test-support,types:** move test fixtures into test-support ([70d88cb](https://github.com/appium/appium/commit/70d88cb86f28354efe313cc6be6a0afef20b38b3))

## [1.9.2](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.9.1...@testspectra/base-plugin@1.9.2) (2022-06-04)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.9.1](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.9.0...@testspectra/base-plugin@1.9.1) (2022-05-31)

**Note:** Version bump only for package @testspectra/base-plugin

# [1.9.0](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.8.5...@testspectra/base-plugin@1.9.0) (2022-05-31)

### Bug Fixes

- **appium:** fix extension autoinstall postinstall script ([3e2c05d](https://github.com/appium/appium/commit/3e2c05d8a290072484afde34fe5fd968618f6359)), closes [#16924](https://github.com/appium/appium/issues/16924)
- **types,base-plugin:** fix static prop types for plugins ([2289b45](https://github.com/appium/appium/commit/2289b4527208c595b2758b9b14d86a2ab91ac15f))

### Features

- **base-plugin:** prepare for use by plugins ([5e96a6d](https://github.com/appium/appium/commit/5e96a6d2a7a79e96de03802b05406325765f15ab))

## [1.8.5](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.8.4...@testspectra/base-plugin@1.8.5) (2022-05-02)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.8.4](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.8.3...@testspectra/base-plugin@1.8.4) (2022-04-20)

**Note:** Version bump only for package @testspectra/base-plugin

## [1.8.3](https://github.com/appium/appium/compare/@testspectra/base-plugin@1.8.2...@testspectra/base-plugin@1.8.3) (2022-04-20)

**Note:** Version bump only for package @testspectra/base-plugin

## 1.8.2 (2022-04-20)

### Bug Fixes

- **base-plugin:** correct version ([b438249](https://github.com/appium/appium/commit/b438249583ef7950dc5f23e51049c677de24b716))
- **base-plugin:** use correct 'address' prop instead of 'host' ([dc9fa62](https://github.com/appium/appium/commit/dc9fa6236db7dbaaeccdbe9e8dcb83bde179ed72))
