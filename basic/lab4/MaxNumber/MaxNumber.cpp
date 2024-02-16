#include <iostream>
#include <string>
#include <limits.h>
using std::cin;
using std::cout;
using std::string;
using std::endl;
using std::stod;


int main()
{
	string number;
	double max= INT_MIN;
	cin >> number;

	while(number.compare("Stop") != 0)
	{
		double number1 = stod(number);
		if (number1 > max) {
			max = number1;
		}
		cin >> number;
	}
	cout << max;
}
