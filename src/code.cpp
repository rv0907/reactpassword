#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main(){
long long t=0;
cin>>t;
while(t--){
long long n,m,k,c;

cin>>n;
priority_queue<int>pq;
map<int,vector<int>>mp;
for(int i=0;i<n;i++){
 int z;
 cin>>z;
 if(mp.find(z)==mp.end())pq.push(z);
 mp[z].push_back(i);
}
vector<int>a(n,0);
int op=0;
while(!pq.empty()){
int node=pq.top();
pq.pop();

vector<int>v=mp[node];

for(int i=0;i<v.size();i++){

int d=v[i];
int ch=0;
if(a[d])continue;

if(d-1>=0&&a[d-1]){
 ch=1;
}else if(d+1<n&&a[d+1]){
 ch=1;
}
a[d]=1;
i++;
while(i<v.size()&&v[i]==d+1){
 a[v[i]]=1;
if(v[i]+1<n&&a[v[i]+1])ch=1;
i++;
}
i--;
if(ch==0){
 //cout<<d<<"k"<<i<<endl;
 op++;
}
}

}
cout<<op<<endl;
}
return 0;
}