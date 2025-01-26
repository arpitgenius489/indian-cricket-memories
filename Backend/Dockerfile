# Step 1: Build stage
FROM openjdk:17-jdk-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project files (including the Maven Wrapper) into the container
COPY . .

# Make sure the Maven wrapper is executable (just in case)
RUN chmod +x ./mvnw

# Run the Maven wrapper to build the project and create the JAR file in the target folder
RUN ./mvnw clean package -DskipTests

# Step 2: Runtime stage (use a slim OpenJDK image to run the app)
FROM openjdk:17-jdk-slim

# Set the working directory for the runtime container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the Spring Boot app will run on
EXPOSE 8080

# Specify how to run the Spring Boot app (using the JAR file created in the build stage)
ENTRYPOINT ["java", "-jar", "app.jar"]