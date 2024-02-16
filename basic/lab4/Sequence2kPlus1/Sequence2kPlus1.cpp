#include <iostream>
using std::cin;
using std::cout;
using std::string;
using std::endl;
int main()
{

	int number;
	cin >> number;
	int k = 1;
	while (k <= number) {
		cout << k << endl;
		k = k * 2 + 1;
	}
}