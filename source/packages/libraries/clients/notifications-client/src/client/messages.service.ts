/*********************************************************************************************************************
 *  Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

import { injectable } from 'inversify';
import { RequestHeaders } from './common.model';
import { CommonServiceBase } from './common.service';
import { SimulateIoTCoreMessageRequest } from './messages.model';

export interface MessagesDebugService {
    simulateIoTCoreMessage(
        message: SimulateIoTCoreMessageRequest,
        additionalHeaders?: RequestHeaders
    ): Promise<void>;
}

@injectable()
export class MessagesDebugServiceBase extends CommonServiceBase {
    protected iotcoreRelativeUrl(): string {
        return `/messages/iotcore`;
    }
}
