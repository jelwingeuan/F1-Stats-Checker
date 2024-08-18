#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to send the HTML file as a response
void serve_html() {
    FILE *file = fopen("../templates/index.html", "r");
    if (file == NULL) {
        printf("Content-type: text/html\n\n");
        printf("<html><body><h1>Error 404: File not found</h1></body></html>");
        return;
    }

    printf("Content-type: text/html\n\n");

    char line[1024];
    while (fgets(line, sizeof(line), file)) {
        printf("%s", line);
    }
    fclose(file);
}

// Function to handle fetching driver stats
void fetch_driver_stats(char *driverName) {
    printf("Content-type: application/json\n\n");
    if (strcmp(driverName, "hamilton") == 0) {
        printf("{ \"driver\": \"Lewis Hamilton\", \"team\": \"Mercedes\", \"position\": \"1\", \"points\": \"347\", \"wins\": \"11\" }\n");
    } else if (strcmp(driverName, "verstappen") == 0) {
        printf("{ \"driver\": \"Max Verstappen\", \"team\": \"Red Bull\", \"position\": \"2\", \"points\": \"342\", \"wins\": \"9\" }\n");
    } else {
        printf("{ \"error\": \"Driver not found\" }\n");
    }
}

int main(void) {
    char *query = getenv("QUERY_STRING");

    if (query == NULL || strcmp(query, "") == 0) {
        // If there's no query, serve the HTML page
        serve_html();
    } else {
        // If there's a query, handle it as an API request
        char driverName[50] = "";
        char *token = strtok(query, "=");
        if (token != NULL && strcmp(token, "driverName") == 0) {
            token = strtok(NULL, "=");
            if (token != NULL) {
                strcpy(driverName, token);
                fetch_driver_stats(driverName);
            }
        }
    }

    return 0;
}