#include <iostream>
using std::cin;
using std::cout;


int main()
{
	int pagesInBook;
	int pagesReadForHour;
	int days;

	cin >> pagesInBook >> pagesReadForHour >> days;
	int howMuchTimeToReadItInHours = pagesInBook / pagesReadForHour;
	int daysUntillDone = howMuchTimeToReadItInHours / days;

	cout << daysUntillDone;
}
