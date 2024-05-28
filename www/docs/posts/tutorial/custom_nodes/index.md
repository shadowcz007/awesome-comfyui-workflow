# 常用的自定义节点

controlnet 预处理器 comfyui_controlnet_aux 、 ComfyUI-Advanced-ControlNet、ComfyUI_IPAdapter_plus 等

## ComfyUI_IPAdapter_plus

模型下载：

在`extra_model_paths.yaml`文件中记得配置 `ipadapter` 模型的地址

### 视觉编码器

下载后记得重命名，存放地址：`/ComfyUI/models/clip_vision`

- [CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/image_encoder/model.safetensors)
- [CLIP-ViT-bigG-14-laion2B-39B-b160k.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/image_encoder/model.safetensors)

### IPA 模型

存放地址 `/ComfyUI/models/ipadapter`

#### sd15 版本：

- 基础版本 [ip-adapter_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15.safetensors)

- light 版本，轻影响 [ip-adapter_sd15_light_v11.bin](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15_light_v11.bin)

- plus 版本，高强度 [ip-adapter-plus_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus_sd15.safetensors)

- plus 版本，面部增强，适用于肖像 [ip-adapter-plus-face_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus-face_sd15.safetensors)

- full 版本，更强的面部模型 [ip-adapter-full-face_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-full-face_sd15.safetensors)

- vit-G 基础模型， **bigG clip vision encoder** [ip-adapter_sd15_vit-G.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15_vit-G.safetensors)

#### SDXL 版本：

- vit-h 基础版本 [ip-adapter_sdxl_vit-h.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl_vit-h.safetensors)

- plus 版本 [ip-adapter-plus_sdxl_vit-h.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter-plus_sdxl_vit-h.safetensors)

- plus 版本，面部模型 [ip-adapter-plus-face_sdxl_vit-h.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter-plus-face_sdxl_vit-h.safetensors)

- vit-G SDXL 模型 **bigG clip vision encoder** [ip-adapter_sdxl.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl.safetensors)

#### FaceID 模型
FaceID 模型需要 `insightface`, 记得此依赖安装正常，[如果有问题可以查看](https://github.com/cubiq/ComfyUI_IPAdapter_plus/issues/162)

##### SD15

  - 基础款 [ip-adapter-faceid_sd15.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sd15.bin)
  - FaceID plus v2 [ip-adapter-faceid-plusv2_sd15.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sd15.bin),
  - 肖像画的文本提示风格转换 [ip-adapter-faceid-portrait-v11_sd15.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait-v11_sd15.bin)
  - SDXL 基础款 [ip-adapter-faceid_sdxl.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sdxl.bin)
  - SDXL plus v2 [ip-adapter-faceid-plusv2_sdxl.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sdxl.bin)
  - SDXL 肖像画的文本提示风格转换 [ip-adapter-faceid-portrait_sdxl.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait_sdxl.bin)
  - 非常强的 SDXL 风格转换 [ip-adapter-faceid-portrait_sdxl_unnorm.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait_sdxl_unnorm.bin)

Most FaceID models require a LoRA. If you use the `IPAdapter Unified Loader FaceID` it will be loaded automatically if you follow the naming convention. Otherwise you have to load them manually, be careful each FaceID model has to be paired with its own specific LoRA.

- `/ComfyUI/models/loras`
  - [ip-adapter-faceid_sd15_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sd15_lora.safetensors)
  - [ip-adapter-faceid-plusv2_sd15_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sd15_lora.safetensors)
  - [ip-adapter-faceid_sdxl_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sdxl_lora.safetensors), SDXL FaceID LoRA
  - [ip-adapter-faceid-plusv2_sdxl_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sdxl_lora.safetensors), SDXL plus v2 LoRA

All models can be found on [huggingface](https://huggingface.co/h94).
