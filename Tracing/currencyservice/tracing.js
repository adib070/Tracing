'use strict';

const opentelemetry = require('@opentelemetry/api');
const { NodeTracerProvider } = require('@opentelemetry/node');
const { SimpleSpanProcessor } = require('@opentelemetry/tracing');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { B3Propagator } = require('@opentelemetry/core');

const provider = new NodeTracerProvider();

const exporter = new JaegerExporter({
    serviceName: "currency",
    JAEGER_AGENT_PORT: 6831,
    JAEGER_AGENT_HOST: "localhost",
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();
console.log("tracing initialized");