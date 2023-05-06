# Pixel-Market

## Index:
1. [Scaling our Website](#h1)
2. [Docker Containerisation](#h2)
3. [Setting up Kubernetes](#h3)
4. [Scaling the app](#h4)
5. [Our Solution](#h5)
<a id="h1"></a>
### Scaling our Website
As part of our consequence, we were tasked with bringing scalablity to our application. To implement this as per the suggestions offered, we decided to go ahead with Kubernetes after containerising our React App with docker. 
<a id="h2"></a>
### Docker Containerisation
From the Dockerfile and dockerignore files, it is quite evident that our attempt to containerise the application has not gone in vain. Using the Docker Hub of one of our developers, we managed to make the application into a container and have its image be part of the Kuberenetes cluster. 
Our application was then packaged and sent as an image to docker hub. This is shown in the screenshot attached below: <br>
![Docker-proof-container](https://user-images.githubusercontent.com/73834506/236643100-2d073b44-eb06-47d7-9100-c62a999313f6.png)
<a id="h3"></a>
### Setting up Kubernetes
Based on the deployment.yaml and load-balancer.yaml, we tried setting up Kubernetes in our application. Setting up minikube and applying the settings in deployment.yaml file, we were able to run our application locally. To facilitate scalablity, we also applied the load-balancer.yaml configuration. Based on the output shown in the screenshot, we can see that the application can run on seperate nodes.
![Setting-up-kubernetes](https://user-images.githubusercontent.com/73834506/236643381-23af0d7b-0e20-4576-9c52-d634fd98fa54.png)
![live-local-hosted](https://user-images.githubusercontent.com/73834506/236643437-f7729cad-ef27-4819-8808-59db1b67044f.png)
The above screenshot shows our application running on a system on the port specified in the nodePort of the deployment.yaml file.
> ⚠️ <br>
> Unfortunately, the application could not be exposed to requests from external sources due to an issue with the external IP being stuck in the pending state as shown in the first screenshot of this section.

<a id="h4"></a>
### Scaling our Application
To simulate the demand of the application, the screenshot below shows that the application is indeed scalable and can increase or decrease it's replicas as required.
![scaling demo](https://user-images.githubusercontent.com/73834506/236643428-1178db70-4b90-4243-a1a9-8dc2628e87bc.png)
> **Note** <br>
> Since the application could be exposed not to external requests, we could not set up autoscaling. But our screenshots prove that had we recieved cloud support, it would have been a possiblity.
<a id="h5"></a>
### Our Solution
> 🚨
> We tried various cloud serivces that offer Kubernetes support including Microsoft Azure, Google Cloud and AWS. Azure gave a warning of exceeding Resource Allocation on the free tier even when we used the smallest package they had to offer, while Google Cloud and AWS requested a bank card for registering with their services. 

To further accomodate our tasks, we decided to use services that offer scalablity as a default option i.e Netlify for deployment and Google's Firebase for the backend support

