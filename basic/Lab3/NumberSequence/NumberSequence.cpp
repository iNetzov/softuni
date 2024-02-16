#include <iostream>
#include <climits>
using namespace std;

int main()
{
	int max =INT_MIN;
	int min = INT_MAX; 
	int count;
	cin >> count;

	for (int i = 0; i < count; i++)
	{
		int number;
		cin >> number;
		if (number > max) {
			max = number;
		}
		if (number < min) {
			min = number;
		}
	}
	cout << "Max number: " << max << endl << "Min number: " << min << endl;

}
