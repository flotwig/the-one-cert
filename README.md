the-one-cert
====

This is an SSL certificate that is valid for all domains.

Specifically, it is valid for all possible subdomains (127 possible combinations) - all of the domains are listed in [openssl.cnf](openssl.cnf)

* [one-cert.crt](one-cert.crt) - SSL certificate
* [one-cert.key](one-cert.key) - private key

You can regenerate the key by running `node generate.js`.
