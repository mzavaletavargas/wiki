---
id: c747004d-6ec4-4475-a696-fac341c1a707
title: Team Collaboration
desc: ""
updated: 1622002923195
created: 1621908525881
---

## Planning

![](/assets/images/2021-05-24-21-49-18.png)

## Kubernetes development tools

[Skaffold](https://skaffold.dev/)
[loft-sh/devspace](https://github.com/loft-sh/devspace)
[tilt-dev/tilt](https://github.com/tilt-dev/tilt)
[Home - Telepresence](https://www.telepresence.io/)

[hasura/gitkube](https://github.com/hasura/gitkube)

## Ideas

"All of them solve similar problems but with slightly different conceptual and technical approaches: DevSpace provides a bi-directional, real-time code synchronization that allows for hot reloading of containers, so that code changes are visible without restarting the containers. (The other tools are partly offering this now, too.) It is also focused on development scenarios in cloud-based Kubernetes environments. In contrast to this, Tilt is rather specialized on development with local Kubernetes environments, while Telepresence enables the development of a locally running application that can interact with other parts running remotely. Finally, Skaffold is similar to DevSpace and Tilt but has a bit more focus on fast deployment workflows." https://loft.sh/blog/kubernetes-development-workflow-3-critical-steps/

"You must intentionally curate the experience of: local development, packaging
apps, CI/CD, deployment control, and observability" https://www.cncf.io/wp-content/uploads/2020/08/thecloudnativedeveloperworkflow3-180710182802.pdf

## Podcast

Note on podacasT
[Ep. #8, Telepresence with Richard Li of Ambassador Labs](https://open.spotify.com/episode/7J3lxr5MxhGVhOWaLr2lv9?si=BBVX4B_3SRqqxu14pKEK_g)

- Telepresence

- Redirect tcp like you are in the cluster
- Is like a con conexion

- Can share current state of local environment

- Work on layer 7

- Telepresence 2 is in go

- Other tools devtools
- Difference

- Scaffold mentioned difference

- Is like a vpn, require less k8s experience

- 1 integrate tp into clusters,
- 2 demo
- 3 mechanicalls is straightforward

- Any size of team numbers

- Scaffold with telepresence

- Rbac supported

## Charts

![](/assets/images/2021-05-24-22-16-22.png)
https://www.cncf.io/wp-content/uploads/2020/08/thecloudnativedeveloperworkflow3-180710182802.pdf

## Options

[Self-Service Kubernetes Namespaces Are A Game-Changer | Loft Blog](https://loft.sh/blog/self-service-kubernetes-namespaces-are-a-game-changer/)

## Questions

[What Is Canary Testing? A Detailed Explanation - LaunchDarkly](https://launchdarkly.com/blog/what-is-canary-testing-a-detailed-explanation/)

## References

- [Increasing Efficiency & Confidence with Project Apollo](https://robinhood.engineering/increasing-efficiency-confidence-with-project-apollo-cea1ebe0f282)
- [Skaffold - Local Kubernetes Development Made Easy | Youtube](https://www.youtube.com/watch?v=tTNrzEjROCo)
- [Fast dev workflow with Docker/K8S ?? Telepresence: Fast, realistic local development for Kubernetes and OpenShift Origin microservices](https://www.telepresence.io/tutorials/docker.html)
