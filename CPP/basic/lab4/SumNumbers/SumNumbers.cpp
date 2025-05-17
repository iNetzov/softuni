#include <iostream>
using std::cin;
using std::cout;
using std::string;
using std::endl;
int main()
{
	int number = -1;
	int sum = 0;
	cin >> number;

	while (sum < number)
	{
		int number = 0;
		cin >> number;
		sum += number;
	}
	cout << sum;
}
