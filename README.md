build image
```shell
docker build -t charlie/nodejs_k8s .
```
Re-build the image and notice Docker re-using previous layers:
```shell
docker run --rm -d -p 3000:3000 charlie/nodejs_k8s
```
Stop the container:
```shell
docker stop CONTAINER_ID
```
Push the image to DockerHub:
```shell
docker push charlie/nodejs_k8s
```

ref: https://www.digitalocean.com/community/tech-talks/how-to-deploy-a-resilient-node-js-application-on-kubernetes-from-scratch
## Kubernetes
Get worker nodes:
```shell
kubectl get nodes
```

Create a deployment:
```shell
kubectl create deployment --image charlie/nodejs_k8s node-app
```

Scale up to 3 replicas:
```shell
kubectl scale deployment node-app --replicas 3
```

Expose the deployment as a NodePort replica:
```shell
 kubectl expose deployment node-app --type=NodePort --port 3000
```

Look at the newly created service (and the assigned port):
```shell
kubectl get services
```

Grab the public IP of one of the worker nodes:
```shell
kubectl get nodes -o wide
```

Browse to IP:port to test the service
Edit the service:
```shell
kubectl edit service node-app
```

Replace port: 3000 with port: 80

Replace type: NodePort with type: LoadBalancer

Verify that the service was updated: 
```shell
kubectl get service
```

Run the above command every few seconds until you get the external IP address of the Load Balancer
Browse to the IP of the Load Balancer