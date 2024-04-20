---

---
# 教程

> 这是基于[ComfyUI官方仓库](https://github.com/comfyanonymous/ComfyUI) 由ComfyUI中文社区维护的中文文档，ComfyUI是一个强大且模块化的稳定扩散GUI和后端。

本页面的目标是帮助您快速上手ComfyUI，运行您的第一个生成，并为探索下一步提供一些建议。

## 安装

我们不会详细介绍ComfyUI的安装，因为该项目正在积极开发中，这往往会改变安装说明。相反，请参阅GitHub上的[自述文件](https://github.com/comfyanonymous/ComfyUI#installing)，并找到与您的安装相关的部分（Linux，macOS或Windows）。

### 下载模型

如果您完全不了解任何与稳定扩散相关的内容，您要做的第一件事就是获取一个模型_检查点_，您将用它来生成图像。

!!! 提示“经验丰富的用户”

如果您已经有文件（模型检查点，嵌入等），无需重新下载。您可以将它们保留在同一位置，只需告诉ComfyUI在哪里找到它们。为此，请找到名为`extra_model_paths.yaml.example`的文件，将其重命名为`extra_model_paths.yaml`，然后编辑相关行并重新启动Comfy。完成后，跳到下一节。

您可以在[CivitAI](https://civitai.com/) 或 [HuggingFace](https://huggingface.co/models?other=stable-diffusion) 等网站上找到多种模型。首先，获取您喜欢的模型_检查点_，并将其放置在`models/checkpoints`中（如果尚不存在，则创建目录），然后重新启动ComfyUI。

## Comfy的第一步

此时，您应该已经在浏览器标签中启动并运行了ComfyUI。加载的默认流程是熟悉起步的好地方。要导航画布，您可以拖动画布，或者按住++space++并移动鼠标。您可以通过滚动来缩放。


如果您弄乱了什么，只需在菜单中点击`Load Default`将其重置为初始状态。

![ComfyUI默认工作流](./media/default_workflow.svg)
> ComfyUI的默认启动工作流程（在新标签中打开图像以便更好地查看）


在我们运行默认工作流之前，让我们进行一个小修改，以预览生成的图像而不保存它们：

1. 右键单击`Save Image`节点，然后选择`Remove`。
1. 双击画布的空白部分，输入`preview`，然后单击`PreviewImage`选项。
1. 找到`VAE Decode`节点的`IMAGE`输出，并将其连接到您刚添加的`Preview Image`节点的`images`输入。

此修改将预览您的结果，而不会立即将它们保存到磁盘。别担心，如果您真的喜欢某个特定的结果，您仍然可以右键单击图像并选择`Save Image`

通过在菜单中点击`Queue Prompt`或在键盘上按++command+enter++ 或 ++control+enter++ 来创建您的第一张图片，就是这样！

## 加载其他流程

为了便于共享，许多稳定扩散界面（包括ComfyUI）都将生成流程的详细信息存储在生成的PNG中。您找到的与ComfyUI相关的许多工作流程指南也应该包括了此元数据。要加载生成图像的关联流程，只需通过菜单中的`Load`按钮加载图像，或将其拖放到ComfyUI窗口中。这将自动解析详细信息并加载所有相关节点及其设置。


如果您加载了图像但没有显示流程，这可能意味着元数据已从文件中剥离。如果您知道图像的原始来源，请尝试要求作者将其重新上传到不剥离元数据的网站。

## 下一步
本页面应该已经为您提供了如何开始使用Comfy的初步概述。多亏了基于节点的界面，您可以构建由数十个节点组成的工作流程，所有这些节点都在做不同的事情，从而实现一些非常整洁的图像生成管道。

您现在可能也有很多问题，比如刚才发生了什么，每个节点都做了什么，以及_"我如何做X事情"_之类的问题。希望这些问题能在其余的文档中得到回答。

## 进一步的支持

有没有手册回答不了的其他问题？申请加入[ComfyUI中文社区](https://docs.qq.com/form/page/DU2pRVE5OUmZ6amNj)
