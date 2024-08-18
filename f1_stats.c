#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to extract the query parameter
void get_query_param(char *query, char *driverName) {
    if (query == NULL) {
        return;
    }

    char *token = strtok(query, "=");
    while (token != NULL) {
        if (strcmp(token, "driverName") == 0) {
            token = strtok(NULL, "=");
            if (token != NULL) {
                strcpy(driverName, token);
            }
            break;
        }
        token = strtok(NULL, "=");
    }
}

// Function to simulate fetching driver stats (you can replace this with real API calls)
void fetch_driver_stats(char *driverName) {
    // Simulate returning driver data
    if (strcmp(driverName, "hamilton") == 0) {
        printf("Content-type: application/json\n\n");
        printf("{ \"driver\": \"Lewis Hamilton\", \"team\": \"Mercedes\", \"position\": \"1\", \"points\": \"347\", \"wins\": \"11\" }\n");
    } else if (strcmp(driverName, "verstappen") == 0) {
        printf("Content-type: application/json\n\n");
        printf("{ \"driver\": \"Max Verstappen\", \"team\": \"Red Bull\", \"position\": \"2\", \"points\": \"342\", \"wins\": \"9\" }\n");
    } else {
        printf("Content-type: application/json\n\n");
        printf("{ \"error\": \"Driver not found\" }\n");
    }
}

int main(void) {
    char *query = getenv("QUERY_STRING");
    char driverName[50] = "";

    // Extract the driver's name from the query parameter
    get_query_param(query, driverName);

    // Output the HTTP headers
    printf("Content-type: text/html\n\n");

    // Fetch and output driver stats
    fetch_driver_stats(driverName);

    return 0;
}
