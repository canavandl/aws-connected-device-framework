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
import { format } from 'logform';
import { createLogger, LoggerOptions, transports } from 'winston';
const { combine, timestamp, printf } = format;

export const logger = createLogger(<LoggerOptions> {
    level: process.env.LOGGING_LEVEL,
    exitOnError: false,
    transports: [
        new transports.Console(),
    ],
    format: combine(
      timestamp(),
      printf(nfo => {
        return `${nfo.timestamp} ${nfo.level}: ${nfo.message}`;
      })
    ),
});
