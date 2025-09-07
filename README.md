# AI Rename (English)

🤖 Intelligent file renaming using multimodal AI models

## Overview

AI Rename is an intelligent OOMOL workflow that automatically renames files based on their content using advanced multimodal AI models. It's perfect for organizing image collections, documents, and other files with meaningful names.

## Features

✨ **Intelligent Renaming**: Analyzes file content to generate meaningful names
🖼️ **Multi-format Support**: Works with images and various file types
🔄 **Batch Processing**: Rename multiple files at once
🤖 **AI-Powered**: Uses state-of-the-art multimodal models (oomol-VL)
📁 **Folder Organization**: Maintains folder structure while renaming
🎯 **User-Friendly**: Simple drag-and-drop interface

## How It Works

1. **Select Source Folder**: Choose the folder containing files to rename
2. **AI Analysis**: The multimodal model analyzes each file's content
3. **Generate Names**: AI creates descriptive, meaningful filenames
4. **Batch Rename**: All files are renamed automatically with intelligent names

## Usage

### Prerequisites
- OOMOL platform installed
- Internet connection for AI model access

### Installation
1. Import this workflow into your OOMOL platform
2. The workflow will automatically install required dependencies

### Running the Workflow
1. Open the AI Rename flow in OOMOL
2. Click on the "Copy folder" node and select your source folder
3. The AI will analyze and rename all files in the folder
4. Find the renamed files in the output folder

### Configuration Options
- **Input Directory**: Select the folder with files to rename
- **Model**: Choose the AI model (currently supports oomol-VL)
- **Output Directory**: Renamed files will be saved here

## Example

**Before:**
```
IMG_001.jpg
IMG_002.jpg
IMG_003.jpg
```

**After:**
```
sunset_over_mountain_lake.jpg
golden_retriever_playing_fetch.jpg
modern_kitchen_interior_design.jpg
```

## Technical Details

### Workflow Structure
- **Copy Folder**: Creates a working copy of your files
- **AI Rename**: Analyzes content and generates new filenames

### Supported File Types
- Images (JPG, PNG, GIF, etc.)
- Documents (PDF, DOC, etc.)
- Other file formats supported by the multimodal model

## Contributing

We welcome contributions! Please feel free to submit issues and enhancement requests.

### Development
```bash
npm install
pip install -r requirements.txt
```

## Support

- **Repository**: [https://github.com/oomol-flows/ai-rename](https://github.com/oomol-flows/ai-rename)
- **Issues**: Report bugs and request features on GitHub
- **Version**: 0.0.12

## License

This project is part of the OOMOL ecosystem. Please refer to the repository for license information.

---

Made with ❤️ by the OOMOL community