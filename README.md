### To get started

- Start ngrok with `yarn ngrok`
- Build the project `yarn dev` or `yarn build`
- Run the project with `node ./app/build/ts/index.js`

### ToDo

- Link in the dialog modules
- Integrate nodemon maybe?
- Move dialog libraries over from Shopify/dialog to src/dialog
- Add github action for docker and k8s deployment

### Sewing-kit issues

- Why did I have to install `babel-jest`?
- Should `dev` continue to watch for changes?

## Deployment

### Build the docker image

- `docker build -t gcr.io/fondfolio-bot/app:v1`

### Push the image to cloud registry

- `docker push grc.io/fondfolio-bot/app:v1`

### Deploy to kubernetes

- `kubectl apply -f config/deployment.yaml --record`

### Rollback a deploy

- `kubectl rollout undo deployment/my-app-deployment`

### Check container logs

`kubectl logs <POD NAME>`

### Go inside container

`kubectl exec -it <POD NAME> bash`

### Delete a whole deployment

`kubectl delete deployment my-app-deployment`

### Other misc things

```
kubectl get pods
kubectl describe pods/<POD_NAME>
```
