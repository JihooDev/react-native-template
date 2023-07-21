import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { ICON } from '../asset/asset';
import { ht, wt } from '../../responsive/responsive';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import CustomText from '../components/CustomText';
import CustomCenterView from '../components/CustomCenterView';
import { useRecoilState } from 'recoil';
import { test } from '../recoil/test';
import { modalOpen } from '../recoil/control';
import AlertModal from '../components/modal/AlertModal';

const Home = () => {

    const [recoilTest, setRecoilTest] = useRecoilState(test);
    const [modal, setModal] = useRecoilState(modalOpen);

    return (
        <CustomSafeAreaView>
            <AlertModal />
            <TouchableOpacity onPress={() => setModal(true)}>
                <CustomCenterView>
                    <Image
                        source={ICON.logo}
                        style={{
                            width: wt(350),
                            height: ht(350)
                        }}
                    />
                    <CustomText text={recoilTest} type={'Bold'} />
                </CustomCenterView>
            </TouchableOpacity>
        </CustomSafeAreaView>
    )
}

export default Home