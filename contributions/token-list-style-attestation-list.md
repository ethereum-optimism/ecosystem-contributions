---
title: 'TokensList.org-Style Attestation List'
description: 'The TokensList allows users to publish and discover lists of tokens maintained by teams and projects. These lists of tokens make it possible for teams to signal the legitimacy of certain tokens and help users filter out spam. We need this same kind of infra for the Attestation Station. '
lang: 'en-US'
type: 'Draft Project Idea'
authors: ['@smartcontracts (GitHub) @ OP Labs']
category: 'dev-tooling'
effort: 'Large'
skill-sets:
  [
    'Front End Development',
    'Back End Development',
    'Full Stack Development',
    'Smart Contract Development',
  ]
labels:
  [
    'Attestations',
    'Developer Tooling',
    'Chain Infrastructure',
    'Accessibility/Transparency',
  ]
contributions:
  contributors:
    ['@Billy191 (Twitter) @ Catalyzt Tech', 'Wit03 (Twitter) @ Catalyzt Tech']
  discussion-link: 'https://catalyzt.tech/'
  links: ['']
  execution-status: 'in-progress-open'
---

# TokensList.org-Style Attestation List

## Summary

[TokensList.org](https://tokenlists.org/) is a website that allows users to publish and discover lists of tokens maintained by teams and projects. These lists of tokens make it possible for teams to signal the legitimacy of certain tokens and help users filter out spam. The [AttestationStation](https://tokenlists.org/) needs a similar type of "Attestation List" specification and website that helps users understand which attestations/schemas are appropriate to use for which use-cases.

## Possible Features

- An instance of an attestation list following a standard JSON schema and can be hosted publicly on ENS, IPFS, or HTTPS.
- Context on what attestation lists are
- Directions on how to validate that a schemas follow the proposed standard
- Directions on how to author a attestation list
  - List data
    - List URL
    - List Name
    - List version
    - Link to the official homepage of the list manager
  - Attestation data
    - Attestation name
    - Attestation author
    - Attestation key
    - Attestation value
    - Attestation image
    - Attestation description
- Directions on how to deploy an attestation list
- Examples of what a attestation list looks like
