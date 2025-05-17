#include <iostream>
using namespace std;
int main()
{
	int sum = 0;
	int count;
	cin >> count;

	for (int i = 0; i < count; i++)
	{
		int number;
		cin >> number;
		sum += number;
	}
	cout << sum;
}
