#include <iostream>
#include <string>
using namespace std;
int main()
{
	string word;
	getline(cin, word);
	int sum = 0;
	for (int i = 0; i < word.length(); i++)
	{
		if (word[i] == 'a') 
		{
			sum++;
		}
		else if (word[i] == 'e')
		{
			sum += 2;
		}
		else if (word[i] == 'i') 
		{
			sum += 3;
		}
		else if (word[i] == 'o')
		{
			sum += 4;
		}
		else if (word[i] == 'u')
		{
			sum += 5;
		}
	}
	cout << sum;
}
