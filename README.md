# node-fizzbuz(z) 


## Info


https://fizzbuzz.grannec.com/v1/healthcheck -> should auto restart if service crashes (haven't tested fully)

POST https://fizzbuzz.grannec.com/v1/convert -> Takes string of numbers { convert: "1 2 3 4"} returns a json object with the converted value and summary 

Should be application/json as the Content-Type


###General
Deployed on k8s, with nginx ingress and uses letsencrypt for ssl





### Extra

[.drone.yml](.drone.yml) for the build info. Currently builds, publishes, and deploys tags to k8s 


###925cf7f189d1e404cfd55df6e8398d831df0f45a