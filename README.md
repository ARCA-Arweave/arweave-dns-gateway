
# Arweave DNS Gateway

Quick PoC that allow people to register domain names with a TXT record and, have them automatically
receive a cert with lets encrypt, and reverse proxies them to an Arweave gateway.

## Dev Usage / Info

deploy somewhere, probably on the same machine as gateway.

follow express-greenlock instructions to setup a config, edit some of the source for hardcoded domains

Read code, make better, cleanup bad cache, use nginx perhaps.

`npm run start`

# User usage 

> **_N.B. 
> dns.perma.online (52.191.214.142) is currently offline. Let's call this a scream test. Get in touch if this is a problem for you or your clients._**

In this example replace `mydomain.com` with your own registered domain name.

### Setup DNS Records with your own registrar (Choose 1 option)

#### Option A. Set up root domain:

1. Set A record for `mydomain.com` pointing to `52.191.214.142` (dns.perma.online)

2. Set TXT record for `arweavetx.mydomain.com` to a TX ID

#### Option B. Set up a subdomain

1. Set CNAME record for `subdomain.mydomain.com` pointing to `dns.perma.online`

2. Set TXT record for `arweavetx.subdomain.mydomain.com` to a TX ID

**Please note that your DNS records may take some time to propogate across the DNS server network (sometimes 24 hours)**

### Use ARCA's server to register your domain to be served

```bash
curl -X POST -H "Content-Type: text/plain" --data "mydomain.com" https://dns.perma.online/v0/add_domain
```

### Go!

Navigate to `https://mydomain.com`. The first navigation may take some time as as an SSL cert is generated. The TX you set will be served under the secure origin of `https://mydomain.com`
