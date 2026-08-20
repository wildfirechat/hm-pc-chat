## 鸿蒙 PC 端

### 说明
1. 这个项目本质是适配了`ohos`的 Electron 本身
2. 本项目启动后，Electron 会加载运行`web_engine/src/main/resources/resfile/resources/app`
3. `web_engine/src/main/resources/resfile/resources/app` 是通过 [vue-pc-chat](https://github.com/wildfirechat/vue-pc-chat) 打包生成的

### 更新野火IM PC端功能
请参考[README_ohos.md](https://github.com/wildfirechat/vue-pc-chat/blob/master/README_ohos.md)

### 运行
1. 解压`libelectron.so.zip`，将解压出来的`libelectron.so`放到`electron/libs/arm64-v8a/`目录下
2. 鸿蒙 PC SDK，也就是`electron/libs/marswrapper.node`文件，是需要付费的，请联系官方申请试用；申请后，请替换该文件
3. 使用`DevEco Studio`即可运行、打包、发布

### 模拟器调试特别说明
由于模拟器不支持硬件加速，打包`vue-pc-chat`时，需要禁用硬件加速；
```c
//background.js 文件搜索下面这行，并取消注释
//app.disableHardwareAcceleration();
```
但正式发布时，不能禁用硬件加速，以便获得更好的体验

### 上架前，特殊权限申请
```
ohos.permission.READ_WRITE_DESKTOP_DIRECTORY
ohos.permission.SYSTEM_FLOAT_WINDOW
ohos.permission.READ_WRITE_DOCUMENTS_DIRECTORY
ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY
ohos.permission.READ_PASTEBOARD
ohos.permission.FILE_ACCESS_PERSIST

```

### electron 版本
项目当前使用的版本是`v34.8.5`，[下载地址](https://devcloud.cn-north-4.huaweicloud.com/codehub/project/b19f5ea8ffd4492ea8c06ca2ebf3f858/codehub/2821214/home?ref=electron34-release&filePath=v34.8.5-20260729.1-release.zip&isFile=true)

### 参考
[ohos electron](https://gitcode.com/openharmony-sig/electron)