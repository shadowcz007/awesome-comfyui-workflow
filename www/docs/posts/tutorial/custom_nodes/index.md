# 常用的自定义节点

controlnet预处理器 comfyui_controlnet_aux  、 ComfyUI-Advanced-ControlNet、ComfyUI_IPAdapter_plus 、ComfyUI_InstantID 等


## ComfyUI_IPAdapter_plus

模型下载：

在`extra_model_paths.yaml`文件中记得配置`ipadapter`模型的地址

- `/ComfyUI/models/clip_vision`
    - [CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/image_encoder/model.safetensors), download and rename
    - [CLIP-ViT-bigG-14-laion2B-39B-b160k.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/image_encoder/model.safetensors), download and rename
    
- `/ComfyUI/models/ipadapter`, create it if not present
    - 基础版本，平均强度 [ip-adapter_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15.safetensors)
    
    - 轻影响版本 [ip-adapter_sd15_light_v11.bin](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15_light_v11.bin)
    
    - Plus model, very strong [ip-adapter-plus_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus_sd15.safetensors)
    -  Face model, portraits [ip-adapter-plus-face_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus-face_sd15.safetensors)
    - 更强大的面部模型，并不一定意味着更好。 [ip-adapter-full-face_sd15.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-full-face_sd15.safetensors)
    - Base model, **requires bigG clip vision encoder** [ip-adapter_sd15_vit-G.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter_sd15_vit-G.safetensors), 
    - SDXL model [ip-adapter_sdxl_vit-h.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl_vit-h.safetensors)
    - SDXL plus model [ip-adapter-plus_sdxl_vit-h.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter-plus_sdxl_vit-h.safetensors)
    - SDXL face model [ip-adapter-plus-face_sdxl_vit-h.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter-plus-face_sdxl_vit-h.safetensors)
    - vit-G SDXL model, **requires bigG clip vision encoder** [ip-adapter_sdxl.safetensors](https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter_sdxl.safetensors)
 

**FaceID** models require `insightface`, you need to install it in your ComfyUI environment. Check [this issue](https://github.com/cubiq/ComfyUI_IPAdapter_plus/issues/162) for help. Remember that most FaceID models also need a LoRA.

For the Unified Loader to work the files need to be named exactly as shown in the list below.

- `/ComfyUI/models/ipadapter`
    - 基础款 [ip-adapter-faceid_sd15.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sd15.bin)
    - FaceID plus v2 [ip-adapter-faceid-plusv2_sd15.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sd15.bin), 
    - 肖像画的文本提示风格转换 [ip-adapter-faceid-portrait-v11_sd15.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait-v11_sd15.bin)
    - SDXL 基础款 [ip-adapter-faceid_sdxl.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sdxl.bin) 
    - SDXL plus v2 [ip-adapter-faceid-plusv2_sdxl.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sdxl.bin)
    - SDXL 肖像画的文本提示风格转换 [ip-adapter-faceid-portrait_sdxl.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait_sdxl.bin)
    - 非常强的SDXL风格转换  [ip-adapter-faceid-portrait_sdxl_unnorm.bin](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait_sdxl_unnorm.bin)


Most FaceID models require a LoRA. If you use the `IPAdapter Unified Loader FaceID` it will be loaded automatically if you follow the naming convention. Otherwise you have to load them manually, be careful each FaceID model has to be paired with its own specific LoRA.

- `/ComfyUI/models/loras`
    - [ip-adapter-faceid_sd15_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sd15_lora.safetensors)
    - [ip-adapter-faceid-plusv2_sd15_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sd15_lora.safetensors)
    - [ip-adapter-faceid_sdxl_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid_sdxl_lora.safetensors), SDXL FaceID LoRA
    - [ip-adapter-faceid-plusv2_sdxl_lora.safetensors](https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sdxl_lora.safetensors), SDXL plus v2 LoRA
 


All models can be found on [huggingface](https://huggingface.co/h94).