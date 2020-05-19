#!/bin/bash
openssl req -new -newkey rsa:2048 -sha256 -nodes -out one-cert.csr -keyout one-cert.key -config openssl.cnf

openssl x509 -req -days 3650 -in one-cert.csr -signkey one-cert.key \
 -out one-cert.crt -extfile openssl.cnf -extensions v3_req

openssl x509 -trustout  -req -days 3650 -in one-cert.csr -signkey one-cert.key -out one-cert-trusted.crt
openssl x509 -in one-cert.crt -text -noout
