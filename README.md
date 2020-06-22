
# Arweave DNS Gateway

Quick PoC that allow people to register domain names with a TXT record and, have them automatically
receive a cert with lets encrypt, and reverse proxies them to an Arweave gateway.

## Dev Usage / Info

deploy somewhere, probably on the same machine as gateway.

follow express-greenlock instructions to setup a config, edit some of the source for hardcoded domains

Read code, make better, cleanup bad cache, use nginx perhaps.

`npm run start`

# User usage

In this example replace `mydomain.com` with your own registered domain name.

### Setup DNS Records with your own registrar

1. Set A record for `mydomain.com` pointing to `dns.perma.online`

2. Set TXT record for `arweavetx.mydomain.com` to a TX ID

### Use ARCA's server to register your domain to be served

```bash
curl -X POST -H "Content-Type: text/plain" --data "mydomain.com" https://dns.perma.online/v0/add_domain
```

### Go!

Navigate to `https://mydomain.com`, the first navigation may take some time as
as an SSL cert is generated. The TX you set will be served under the 
secure origin of `https://mydomain.com`
