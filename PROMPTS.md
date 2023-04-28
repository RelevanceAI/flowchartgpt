The prompts used in FlowchartGPT's chain have been open-sourced here. We hope they help you if you're engineering your own chain!

> **Want to create your own chain in minutes?** [Relevance Chains](relevanceai.com) lets you create your own LLM-powered chain using a drag-and-drop UI, then deploy it instantly as an app or API for use in your own product.

# Step 1: Infer level of detail

```
Please provide the appropriate level of detail ('main stages' or 'detailed steps') required for a flowchart representing the following process:""" 
[prompt]
""". 
Only return either 'main stages' or 'detailed steps'. 
```
# Step 2: Find the process's main stages

```
Please provide the main stages of the process described here: """
[prompt]
"""
Only return the stages.
```

# Step 3: (If process is detailed) For each main stage, find its steps

```
If the following variable is 'main stages': """
[level of detail from step 1]
"""
only return the string 'none'. Otherwise, follow the subsequent instructions.

For the process described below:"""
[prompt]
"""
with the given stages:"""
[main stages from step 2]
"""
Provide the detailed steps for each stage in the following format:
"""
STAGE: [value]
STEPS: [comma-separated list of steps in each stage]
"""
```

# Step 4: Generate nodes and edges for `react-flow`

```
You are the creator of the react-flow library, which renders flowcharts, and are an expert. Given the process described here:"""
[prompt]
"""
with the following stages: """
[main stages from step 2]
"""
with the following steps: """
[steps from step 3]
"""
WHICH SHOULD ONLY BE INCLUDED IF THEY AREN'T 'NONE'

Create a flowchart object using the react-flow object with nodes and edges in the following format:"""
{ nodes: [value], edges: [value] }
"""

Each node should include an "id", "data" with a "label", and "position" in the format: { "id": "[value]", "data": { "label": "[value]" }, "position": { "x": [value], "y": [value] } }. Consider any emphasis or animation requirements for edges connecting the stages. Return the output as a JSON string. Make sure the nodes are connected and spaced appropriately.
```
