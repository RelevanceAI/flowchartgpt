<div align="center">
    <h2>FlowchartGPT</h2>
    <p><i>Turn descriptions into flowcharts in seconds.</i></p>
    <img src="https://user-images.githubusercontent.com/33971845/235101660-01ecc87f-5300-494b-8e29-c286effda998.png" width="600" />
</div>

## 🔗 Powered by Relevance Chains
⚡️ LangChain, but _easier_. 🧱 Use our drag-and-drop UI to create LLM-powered chains in minutes. 🚀 Deploy them immediately as an app or API to use in your product. Try today at [relevanceai.com](relevanceai.com).

## Built with
- Next.js 13
- React
- [shadcn/ui](https://github.com/shadcn/ui)
- [react-flow](https://github.com/wbkd/react-flow)

## Getting started
Clone this repository, then:
```bash
pnpm install
pnpm run dev # Access dev server at http://localhost:3000
```

---
FlowchartGPT utilises a **chain** to generate the nodes and edges required to render a flowchart for the given prompt. More specifically, it chains several calls to `gpt-3.5-turbo` together. Using a chain helps GPT-3.5 understand the requirements for generating the flowchart and ensures the validity of the output. This achieves consistent and high-quality results in comparison with compressing instructions into a single prompt, which yielded inconsistent or poor results in testing.

The steps in the chain are illustrated below.

<div align="center">
    <img src="https://user-images.githubusercontent.com/33971845/235194794-a9b9bbe9-aa8e-45ca-90d0-995623b57a19.png" width="600" />
</div>

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
