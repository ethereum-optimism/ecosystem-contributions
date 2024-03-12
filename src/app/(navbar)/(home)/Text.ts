import Filter from "@/public/static/filter/filter.json"

export const newFilter = {
    "type": Filter.type.options,
    "effort": Filter.effort.options,
    "skillsets": Filter["skill-sets"],
    "labels": Filter.labels.options,
    "category": Filter.category.options,
    "execution-status": Filter.contributions["execution-status"]
}

export let categoryKeyAndValue: {[key: string]: string} = {}
const categories = Filter.category.options
for (let i = 0; i < categories.length; i++) {
    categoryKeyAndValue[categories[i].id] = categories[i].name;
}

// "category": {
//     "description": "The category of the request.",
//     "type": "single-option",
//     "options": [
//       {
//         "id": "dev-tooling",
//         "name": "Developer Tooling",
//         "description": "Tooling to help developers build or deploy dapps for the Superchain."
//       },
//       {
//         "id": "dev-onboarding",
//         "name": "Developer Onboarding",
//         "description": "Tooling, guides & tutorials designed to onboard developers into the Superchain."
//       },
//       {
//         "id": "dev-experiment",
//         "name": "Developer Experimentation",
//         "description": "Technical experimentation for out there ideas. Lets test the bounds of what is possible!"
//       },
//       {
//         "id": "protocol-infra",
//         "name": "Protocol Infrastructure",
//         "description": "Infrastructure needed for protocols to run and be used, such as RPC providers, node infra, etc."
//       },
//       {
//         "id": "dapp-idea",
//         "name": "Dapp Idea",
//         "description": "An idea for a dapp that is currently missing in the Superchain ecosystem."
//       }
//     ],
//     "validation": {
//       "char-limit": 50,
//       "optional": "false",
//       "min-options": "1",
//       "max-options": "1"
//     }
//   },