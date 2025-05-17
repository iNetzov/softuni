#include <iostream>
#include <string>
#include <iomanip>

double calculateAverageGrade(double grades[], int size) {
    double total = 0.0;
    for (int i = 0; i < size; ++i) {
        total += grades[i];
    }
    return total / size;
}

int main() {
    std::string name;
    std::cout << "Enter student's name: ";
    std::cin >> name;

    const int MAX_GRADES = 12;
    double grades[MAX_GRADES];
    double grade;
    int numGrades = 0;
    int exclusions = 0;

    while (numGrades < MAX_GRADES) {
        std::cout << "Enter grade for " << name << " (or -1 to stop): ";
        std::cin >> grade;

        if (grade == -1) {
            break;
        }

        grades[numGrades] = grade;
        numGrades++;

        if (grade < 4.0) {
            exclusions++;
            std::cout << name << " has been excluded at grade " << numGrades << std::endl;
            if (exclusions >= 2) {
                break;
            }
        }
        else if (numGrades == MAX_GRADES) {
            double average = calculateAverageGrade(grades, numGrades);
            std::cout << name << " graduated. Average grade: " << std::fixed << std::setprecision(2) << average << std::endl;
        }
    }

    if (exclusions < 2 && numGrades < MAX_GRADES) {
        std::cout << name << " has been excluded at grade " << numGrades << std::endl;
    }

    return 0;
}