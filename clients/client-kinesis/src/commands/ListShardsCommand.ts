// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListShardsInput, ListShardsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListShardsCommand,
  serializeAws_json1_1ListShardsCommand,
} from "../protocols/Aws_json1_1";

export interface ListShardsCommandInput extends ListShardsInput {}
export interface ListShardsCommandOutput extends ListShardsOutput, __MetadataBearer {}

/**
 * <p>Lists the shards in a stream and provides information about each shard. This operation
 *             has a limit of 1000 transactions per second per data stream.</p>
 *         <p>This action does not list expired shards. For information about expired shards, see
 *                 <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-after-resharding.html#kinesis-using-sdk-java-resharding-data-routing">Data Routing, Data Persistence, and Shard State after a Reshard</a>. </p>
 *         <important>
 *             <p>This API is a new operation that is used by the Amazon Kinesis Client Library
 *                 (KCL). If you have a fine-grained IAM policy that only allows specific operations,
 *                 you must update your policy to allow calls to this API. For more information, see
 *                     <a href="https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html">Controlling Access to Amazon Kinesis Data Streams Resources Using
 *                 IAM</a>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListShardsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListShardsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new ListShardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListShardsCommandInput} for command's `input` shape.
 * @see {@link ListShardsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class ListShardsCommand extends $Command<
  ListShardsCommandInput,
  ListShardsCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListShardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListShardsCommandInput, ListShardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "ListShardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListShardsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListShardsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListShardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListShardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListShardsCommandOutput> {
    return deserializeAws_json1_1ListShardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
