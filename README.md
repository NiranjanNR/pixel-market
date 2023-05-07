# Pixel-Market

## Index:
1. [Scaling our Website](#h1)
2. [Docker Containerisation](#h2)
3. [Setting up Kubernetes](#h3)
4. [Scaling the app](#h4)
5. [Our Solution](#h5)
6. [Website Mockups](#h6)
<a id="h1"></a>
### Tech Stack
Front-End : React.js<br>
Back-End : Firebase<br>
Deployed on : Netlify<br>

### Features Implemented
Fully responsive website<br>
Data retrieval from firebase( display of digital Art)<br>
![image](https://user-images.githubusercontent.com/73242028/236668526-4886141c-bb9c-4d6b-beb8-9278ca850c00.png)

Submission of user's digital art<br>

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
<a id="h6"></a>

### 🚨
### Since Firebase is a freemium service, when trying to access our features in it, we found that we exceed the number of read requests that they allow per day
## Mockups:
![sitemkp1](https://user-images.githubusercontent.com/73834506/236654718-fc52d6cc-af83-4aef-8644-c0c7de78b55b.JPG)
![sitemkp3](https://user-images.githubusercontent.com/73834506/236654761-c980a128-4202-45b9-b367-2fef5bef1aef.JPG)
![sitemkp2](https://user-images.githubusercontent.com/73834506/236654768-6d073837-5d41-4817-bcb3-31ba32b3d429.JPG)


## Screenshots
![image](https://user-images.githubusercontent.com/73242028/236668943-c0eec339-bcf4-406c-ba02-f6b5a3a57032.png)

![image](https://user-images.githubusercontent.com/73242028/236669021-acd3c3e7-3a43-4d0e-a1e1-233319367be6.png)

![image](https://user-images.githubusercontent.com/73242028/236669029-930c9469-aa80-4f5a-9eec-d5bdf53925cb.png)

![image](https://user-images.githubusercontent.com/73242028/236669071-cb6f4bf3-d2b5-4679-a349-ca67f0cd27c5.png)

![image](https://user-images.githubusercontent.com/73242028/236669125-90c1e11d-8292-41aa-b8f1-98ce7e31cea0.png)

![image](https://user-images.githubusercontent.com/73242028/236669232-49229900-5e0e-42f5-a201-167cbfb692cd.png)
