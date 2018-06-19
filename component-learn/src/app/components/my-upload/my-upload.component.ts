import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-my-upload',
  templateUrl: './my-upload.component.html',
  styleUrls: ['./my-upload.component.scss']
})
export class MyUploadComponent implements OnInit {

  modalRef: BsModalRef;
  dimensionSelected;
  bsModalRef: BsModalRef;

  isCollapsed: boolean = true;

  // 多选 & 单选
  selectList: Array<any>;

  dataList: Array<object>;
  dataLength: number;
  newKnowledge: Array<object>;
  // 没有数据展示的图片
  noData = 'assets/images/knowledge-center/no-data.jpg';

  // 搜索字段
  public values: any;

  public types: any;

  constructor(private service: MyUploadService,private newsService: NewsService, private httpServiceService: HttpServiceService,private modalService: BsModalService) {
    super();
    this.values = {fuzzy: null, title: null, createby: null, status: null};
    this.types = [];
    this.params.orderby = 'createDate';
    this.params.filters = [
      {key: 'title', opt: 'LIKE', type: 'S', value: ''},
      {key: 'docName', opt: 'LIKE', type: 'S', value: ''},
      {key: 'tags', opt: 'LIKE', type: 'S', value: ''},
      {key: 'provideruser', opt: 'LIKE', type: 'S', value: ''},
      {key: 'docType', opt: 'LIKE', type: 'S', value: ''},
      {key: 'docno', opt: 'LIKE', type: 'S', value: ''},
      {key: 'folderId', opt: 'LIKE', type: 'S', value: ''},
      {key: 'checkInUser', opt: 'LIKE', type: 'S', value: 'test02'},
      // {key: 'createDate', opt: 'BETWEEN', type: 'D', value: ''},
    ];
  }

  ngOnInit() {
    this.fnGetDatas();
    this.loadNewKnowledge();
    // 初期化时清除缓存
    localStorage.setItem("Dimension","");
  }

  // 加载数据
  public fnGetDatas(): void {
    console.log(this.params);
    this.service.getMyUpload(this.params).then(res => {
      console.log(res);
      if(res.list){
        this.fnSetDatas(res);
      }
    })
  }
  // 加载最新知识
  private loadNewKnowledge(){
    this.service.getNewKnowledge('{}').then(res => {
      console.log(res);
      this.newKnowledge = res.list;
    })
  }

  // 模态框关闭事件
  public _combine = Observable.combineLatest(
    this.modalService.onHide
  ).subscribe(() => {this.dimensionSelected= localStorage.getItem("Dimension")});

  // 打开模态框操作
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(DimensionSelectComponent);
  }

  public fnSearch(type): void {

  }

  public fnSure(): void {

  }

  // 弹框逻辑
  public fnModalRelease(modal: ModalDirective, id: string): void {
    if (id) {
      // TODO 修改
    } else {
      // TODO 新建
    }
    modal.show();
  }

  // 搜索
  search(term: string) {
    console.log(term);
  }
  // 高级搜索
  advancedSearch(value) {
    console.log(value);
  }

  // 查看详情
  viewDetails() {
    this.bsModalRef = this.modalService.show(ViewDetailsComponent);
    this.modalTolg();
  }

  public modalTolg () {
    let modalList = document.getElementsByClassName("modal-dialog");
    for(let i = 0; i < modalList.length; i++) {
      modalList[i].setAttribute("class","modal-dialog modal-lg");
    }
  }
}
