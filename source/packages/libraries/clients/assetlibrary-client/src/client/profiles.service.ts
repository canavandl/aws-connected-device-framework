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
import { PathHelper } from '../utils/path.helper';
import { RequestHeaders } from './common.model';
import { ClientServiceBase } from './common.service';
import {
    DeviceProfileResource,
    GroupProfileResource,
    ProfileResourceList,
} from './profiles.model';

export interface ProfilesService {
    createProfile(category: string, body: DeviceProfileResource | GroupProfileResource, additionalHeaders?:RequestHeaders): Promise<void>;

    createDeviceProfile(body: DeviceProfileResource, additionalHeaders?:RequestHeaders): Promise<void>;

    createGroupProfile(body: GroupProfileResource, additionalHeaders?:RequestHeaders): Promise<void>;

    getProfile(category: string, templateId: string, profileId: string, additionalHeaders?:RequestHeaders): Promise<DeviceProfileResource | GroupProfileResource>;

    getDeviceProfile(templateId: string, profileId: string, additionalHeaders?:RequestHeaders): Promise<DeviceProfileResource>;

    getGroupProfile(templateId: string, profileId: string, additionalHeaders?:RequestHeaders): Promise<GroupProfileResource>;

    updateProfile(category: string, templateId: string, profileId: string, body: DeviceProfileResource | GroupProfileResource, additionalHeaders?:RequestHeaders): Promise<void>;

    updateDeviceProfile(templateId: string, profileId: string, body: DeviceProfileResource, additionalHeaders?:RequestHeaders): Promise<void>;

    updateGroupProfile(templateId: string, profileId: string, body: GroupProfileResource, additionalHeaders?:RequestHeaders): Promise<void>;

    deleteProfile(category: string, templateId: string, profileId: string, additionalHeaders?:RequestHeaders): Promise<void>;

    deleteDeviceProfile(templateId: string, profileId: string, additionalHeaders?:RequestHeaders): Promise<void>;

    deleteGroupProfile(templateId: string, profileId: string, additionalHeaders?:RequestHeaders): Promise<void>;

    listProfiles(category: string, templateId: string, additionalHeaders?:RequestHeaders): Promise<ProfileResourceList>;

    listDeviceProfiles(templateId: string, additionalHeaders?:RequestHeaders): Promise<ProfileResourceList>;

    listGroupProfiles(templateId: string, additionalHeaders?:RequestHeaders): Promise<ProfileResourceList>;
}

@injectable()
export class ProfilesServiceBase extends ClientServiceBase {

    constructor() {
        super();
    }

    protected profilesRelativeUrl(): string {
        return '/profiles';
    }

    protected profilesOfTemplateRelativeUrl(category:string, templateId:string): string {
        return `/profiles/${category}${PathHelper.encodeUrl(templateId)}`;
    }

    protected profileRelativeUrl(category:string, templateId:string, profileId:string): string {
        return `/profiles/${category}${PathHelper.encodeUrl(templateId, profileId)}`;
    }
}
