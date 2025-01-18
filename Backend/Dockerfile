# Step 1: Use an official Java base image
FROM openjdk:17-jdk-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the built JAR file from your local machine to the container
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Step 4: Specify how to run the app
ENTRYPOINT ["java", "-jar", "app.jar"]

# Step 5: Expose the port the app will run on
EXPOSE 8080
