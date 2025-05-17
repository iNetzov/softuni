#include <iostream>
using namespace std;
int main()
{
	int number;
	cin >> number;

	for (int i = 0; i < number; i += 3)
	{
		cout << i+1 << endl;
	}
}
