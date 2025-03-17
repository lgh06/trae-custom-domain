# Trae custom domain  

# 说明
目前Trae编辑器不支持使用自定义域名的模型提供商。   
国内无法连接Anthropic。   
但是sonnet 3.7模型又经常排队。  
故 此项目诞生。  

仅适用于MacOS系统  
其它系统请自行生成证书和host，并下载caddy。  

仅在 claude-3-7-sonnet-20250219 模型和 V3 API 测试通过。  
其它供应商请自行修改源码。

# 准备
修改请求模型时需要的key。  
修改Caddyfile，然后 `./caddy run`   
npm install， 然后 `node index.js` 

# 证书与hosts
```
# 生成私钥
openssl genrsa -out anthropic.key 2048
# 使用私钥生成证书签名请求(CSR)
openssl req -new -key anthropic.key -out anthropic.csr -config anthropic.cnf
# 使用私钥和CSR生成自签名证书
openssl x509 -req -days 360 -in anthropic.csr -signkey anthropic.key -out anthropic.crt -extensions v3_req -extfile anthropic.cnf 

# 添加证书到系统钥匙串
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain anthropic.crt

# 修改hosts
sudo vim /etc/hosts
shift + g , o
127.0.0.1   api.anthropic.com
ESC , :wq , Enter
```